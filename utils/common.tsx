
import {Setting } from '../generated/graphql'
import _ from 'underscore'

export interface Settings extends Array<Setting>{}

export const makeSummary = (input: Settings): string[][] => {
    let output = []
    let tasks = _.keys(_.indexBy(input, 'task'))
    tasks.unshift('')
    output.push(tasks)
    const criterias = _.keys(_.indexBy(input, 'criteria'))
    criterias.map(criteria => {
        //TODO tmp: string | number => fix any
        let tmp: any = [criteria]
        const where = _.where(input, {criteria})
        const scores = _.map(where, function(o) { 
            tmp.push(_.pick(o, 'score')['score'])
            return _.pick(o, 'score')['score']
        });
        output.push(tmp)
        //console.log('where', where, 'scores', scores, tmp)
        
    })
    //console.log('output', output)
    return output

}