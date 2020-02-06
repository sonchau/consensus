
import {Setting, Criteria } from '../generated/graphql'
import _ from 'underscore'

export interface Settings extends Array<Setting>{}
export interface Criterias extends Array<Criteria>{}
export const makeSummary = (input: Settings): any => {
    let output = []
    let tasks = _.uniq(input.map(item => {
        return _.pick(item, 'task')
    }), 'task')

    tasks.unshift({'task': ''})
    output.push(tasks)

    let criterias = _.uniq(input.map(item => {
        return _.pick(item, 'criteria', 'criteriaId')
    }), 'criteria')
    criterias.map(criteria => {
        //console.log('cr', criteria)
        const criteriaObj = {'criteria': criteria}
        let tmp: any = [criteriaObj]
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
export const makeResult = (inputSetting: Settings, inputCriterias: Criterias): any => {
    let output = []
    let total: number[][] = []
    
    // Create task row
    let tasks = _.uniq(inputSetting.map(item => {
        return _.pick(item, 'task')
    }), 'task')

    tasks.unshift({'task': ''})
    output.push(tasks)

    // Create result row
    let criterias = _.uniq(inputSetting.map(item => {
        return _.pick(item, 'criteria')
    }), 'criteria')
    criterias.map(criteria => {
        //console.log('cr', criteria)
        const criteriaObj = {'criteria': criteria}
        let tmp: any = [criteriaObj]
        let tmpTotal: number[] = []
        const where = _.where(inputSetting, criteria)
        const whereScore = where.map(item => {
                        
            const matchedCriteria = _.findWhere(inputCriterias, {id: item.criteriaId})
            //console.log('item', item, 'matchedCriteria', matchedCriteria)
            let multiplyScore = item.score * matchedCriteria!.score
            tmpTotal.push(multiplyScore)
            //console.log('tmp Total', tmpTotal)
            return {'score': {multiplyScore}}
        })
        const union = _.union(tmp, whereScore);
        output.push(union)
        //console.log('tmp Total', tmpTotal)
        total.push(tmpTotal)
        //console.log('tmp', tmp, 'union', union)     

    })
    // Create Total row
    //console.log('total', total)
    let add = makeTotalArray(total)
    let addObj = add.map(item => {
        return {'total': `${item}`}
    })
    addObj.unshift({'total': ''})

    //Return array of array
    output.push(addObj)
    //console.log('output', output)
    return output
}

export const makeTotalArray = (input: number[][]) => {
    let output: number[] = []
    //console.log('input', input)
    for (let i = 0; i<= input.length -1; i++) {
        //console.log('i', input[i])
        for (let j = 0; j <= input[i].length -1; j++) {
            //console.log('j', input[i][j])
            if(i === 0) {
                output.push(input[i][j])
            } else {
                let add = output[j] + input[i][j]
                output[j] = add
            }
        }
    }
    //console.log('output', output)
    return output
}