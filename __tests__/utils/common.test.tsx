import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {makeSummary, Settings, makeResult, Criterias, makeTotalArray } from '../../utils/common'
import { Criteria } from "../../generated/graphql";


describe("Test itils common", () => {

    test("should make Summary array", async () => {
        const input: Settings = [
            {__typename: "Setting", criteria: "Criteria 1", id: 24, score: 1, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 25, score: 2, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 26, score: 3, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 1", id: 27, score: 4, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 28, score: 5, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 29, score: 6, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 1", id: 30, score: 7, task: "solution 3", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 31, score: 8, task: "solution 3", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 32, score: 9, task: "solution 3", taskId: 1, criteriaId: 1},
        ]
        const output = makeSummary(input)

        const expectOutput = [
            [ {'task': ''}, {'task':'solution 1'}, {'task':'solution 2'}, {'task':'solution 3'} ],
            [ {'criteria': {'criteria':'Criteria 1', criteriaId: 1}}, 
              {'score': {
                '__typename': 'Setting',
                'criteria': 'Criteria 1',
                'id': 24,
                'score': 1,
                'task': 'solution 1',
                taskId: 1, criteriaId: 1
                }
              }
              ,
              {'score': {
                '__typename': 'Setting',
                'criteria': 'Criteria 1',
                'id': 27,
                'score': 4,
                'task': 'solution 2',
                taskId: 1, criteriaId: 1
              }},
              
              {'score': {
                '__typename': 'Setting',
                'criteria': 'Criteria 1',
                'id': 30,
                'score': 7,
                'task': 'solution 3',
                taskId: 1, criteriaId: 1
              }}
              
            ],
            [ {'criteria':{'criteria':'Criteria 2', criteriaId: 1}}, 
            {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 2',
                'id': 25,
                'score': 2,
                'task': 'solution 1',
                taskId: 1, criteriaId: 1
              }},
              {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 2',
                'id': 28,
                'score': 5,
                'task': 'solution 2',
                taskId: 1, criteriaId: 1
              }},
              {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 2',
                'id': 31,
                'score': 8,
                'task': 'solution 3',
                taskId: 1, criteriaId: 1
              }}
            ],
            
            [ {'criteria':{'criteria':'Criteria 3', criteriaId: 1}}, 
            {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 3',
                'id': 26,
                'score': 3,
                'task': 'solution 1',
                taskId: 1, criteriaId: 1
              }},
              {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 3',
                'id': 29,
                'score': 6,
                'task': 'solution 2',
                taskId: 1, criteriaId: 1
              }},
              {'score':{
                '__typename': 'Setting',
                'criteria': 'Criteria 3',
                'id': 32,
                'score': 9,
                'task': 'solution 3',
                taskId: 1, criteriaId: 1
              }}
            ]
          ]  
        expect(output).toEqual(expectOutput)
        //console.log('expectOutput', expectOutput)

      });

      test("should make result array", async () => {
        const input: Settings = [
            {__typename: "Setting", criteria: "Criteria 1", id: 24, score: 1, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 25, score: 2, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 26, score: 3, task: "solution 1", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 1", id: 27, score: 4, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 28, score: 5, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 29, score: 6, task: "solution 2", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 1", id: 30, score: 7, task: "solution 3", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 2", id: 31, score: 8, task: "solution 3", taskId: 1, criteriaId: 1},
            {__typename: "Setting", criteria: "Criteria 3", id: 32, score: 9, task: "solution 3", taskId: 1, criteriaId: 1},
        ]
        const criterias: Criterias = [
          {__typename: "Criteria",
          id: 1,
          name: "Criteria 1",
          score: 1},
          {__typename: "Criteria",
          id: 2,
          name: "Criteria 2",
          score: 2},
          {__typename: "Criteria",
          id: 3,
          name: "Criteria 3",
          score: 3},
        ]
        const output = makeResult(input, criterias)

        const expectOutput = [
            [ {'task': ''}, {'task':'solution 1'}, {'task':'solution 2'}, {'task':'solution 3'} ],
            [ {'criteria': {'criteria':'Criteria 1'}}, 
              {'score': {
                'multiplyScore': 1
                }
              }
              ,
              {'score': {
                'multiplyScore': 4
              }},
              
              {'score': {
                'multiplyScore': 7
              }}
              
            ],
            [ {'criteria':{'criteria':'Criteria 2'}}, 
            {'score':{
              'multiplyScore': 2
              }},
              {'score':{
                'multiplyScore': 5
              }},
              {'score':{
                'multiplyScore': 8
              }}
            ],
            
            [ {'criteria':{'criteria':'Criteria 3'}}, 
            {'score':{
              'multiplyScore': 3
              }},
              {'score':{
                'multiplyScore': 6
              }},
              {'score':{
                'multiplyScore': 9
              }}
            ],
            [ {'total': ''}, {'total': '6'}, {'total':'15'}, {'total':'24'} ],
          ]  
        expect(output).toEqual(expectOutput)
        //console.log('expectOutput', expectOutput)
      });

      test("should make makeTotalArray ", async () => {
        const input: number[][] = [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
        const expectOutput = makeTotalArray(input)
        const output = [ 6,15,24]

        expect(output).toEqual(expectOutput)
        //console.log('expectOutput', expectOutput)
      });

  });