import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {makeSummary, Settings } from '../../utils/common'


describe("Test itils common", () => {
    test("should add", async () => {
      expect(1).toEqual(1)
    });

    test("should set array", async () => {
        const input: Settings = [
            {__typename: "Setting", criteria: "Criteria 1", id: 24, score: 1, task: "solution 1"},
            {__typename: "Setting", criteria: "Criteria 2", id: 25, score: 2, task: "solution 1"},
            {__typename: "Setting", criteria: "Criteria 3", id: 26, score: 3, task: "solution 1"},
            {__typename: "Setting", criteria: "Criteria 1", id: 27, score: 4, task: "solution 2"},
            {__typename: "Setting", criteria: "Criteria 2", id: 28, score: 5, task: "solution 2"},
            {__typename: "Setting", criteria: "Criteria 3", id: 29, score: 6, task: "solution 2"},
            {__typename: "Setting", criteria: "Criteria 1", id: 30, score: 7, task: "solution 3"},
            {__typename: "Setting", criteria: "Criteria 2", id: 31, score: 8, task: "solution 3"},
            {__typename: "Setting", criteria: "Criteria 3", id: 32, score: 9, task: "solution 3"},
        ]
        const output = makeSummary(input)
        const expectOutput = [
            [ '', 'solution 1', 'solution 2', 'solution 3' ],
            [ 'Criteria 1', 1, 4, 7 ],
            [ 'Criteria 2', 2, 5, 8 ],
            [ 'Criteria 3', 3, 6, 9 ]
          ]
        expect(output).toEqual(expectOutput)
      });

  });