import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { toMatchDiffSnapshot } from "snapshot-diff";
import "jest-styled-components";

expect.extend({ toMatchDiffSnapshot });

import App, { Counter, dataReducer } from "./App";

const list = ["a", "b", "c"];

const Button = styled.button`
  color: red;
`;

describe("App", () => {
  describe("Reducer", () => {
    test("it works", () => {
      const tree = renderer.create(<Button />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "red");
    });

    it("should set a list", () => {
      const state = { list: [], error: null };
      const newState = dataReducer(state, {
        type: "SET_LIST",
        list,
      });

      expect(newState).toEqual({ list, error: null });
    });

    it("should reset the error if list is set", () => {
      const state = { list: [], error: true };
      const newState = dataReducer(state, {
        type: "SET_LIST",
        list,
      });

      expect(newState).toEqual({ list, error: null });
    });

    it("should set the error", () => {
      const state = { list: [], error: null };
      const newState = dataReducer(state, {
        type: "SET_ERROR",
      });

      expect(newState.error).toBeTruthy();
    });
  });

  it("increments the counter", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    renderer.act(() => {
      component.root.findAllByType("button")[0].props.onClick();
    });

    const treeUpdate = component.toJSON();
    expect(tree).toMatchDiffSnapshot(treeUpdate);
  });
});

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Counter counter={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
