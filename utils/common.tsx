
import {Setting } from '../generated/graphql'
import _ from 'underscore'

export interface Settings extends Array<Setting>{}

export const makeSummary = (input: Settings): any => {
    let output = []
    let tasks = _.uniq(input.map(item => {
        return _.pick(item, 'task')
    }), 'task')

    tasks.unshift({'task': ''})
    output.push(tasks)

    let criterias = _.uniq(input.map(item => {
        return _.pick(item, 'criteria')
    }), 'criteria')
    criterias.map(criteria => {
        let tmp: any = [criteria]
        const where = _.where(input, criteria)
        const whereScore = where.map(item => {
            return {'score': item}
        })
        const union = _.union(tmp, whereScore);
        output.push(union)
        //console.log('tmp', tmp, 'where', where)     

    })
    //console.log('output', output)
    return output
}
//{'score': }