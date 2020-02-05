import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import {makeSummary, Settings } from '../../utils/common'


describe("Test itils common", () => {

    test("should set array", async () => {
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

  });