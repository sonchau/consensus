
import {Setting, Criteria, TasksDocument } from '../generated/graphql'
import _ from 'underscore'
import axios from 'axios';
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

interface PrevNext {
    prev: string,
    next: string,
    displayColor: string
}

const indexColor = [
     'red',
     'blue',
     'green',
     'purple',
     'yellow',
     'indigo',
     'violet'
]

export const getPrevNext = (currentTaskId: number, taskIds: string): PrevNext => {
    let prev = '', next = '', displayColor = 'red'
    const taskIdList = taskIds.split('_')
    if (taskIdList.length === 1) {
        prev = '/quick/task'
        next = '/quick/summary'
    } else {
        const index = _.indexOf(taskIdList, currentTaskId.toString())

        if(index ===0) {
            //console.log('first')
            //first task
            prev = '/quick/task'
            next = `/quick/task/${taskIdList[index+1]}/${taskIds}`
        } else if (index === taskIdList.length -1) {
            //last task
            //console.log('last')
            prev = `/quick/task/${taskIdList[index-1]}/${taskIds}`
            next = '/quick/summary'
        } else {
            //middle task
            //console.log('middle')
            prev = `/quick/task/${taskIdList[index-1]}/${taskIds}`
            next = `/quick/task/${taskIdList[index+1]}/${taskIds}`
        }

        if (index < 6) {
            displayColor = indexColor[index]
        }
    }

    return {
        prev,
        next,
        displayColor
    }
}

export interface ChartData {
    labels: string[],
    data: string[]
}
export const makeHorizontalChartData = (input : object[][]):  ChartData => {
    let labels  = _.pluck(input[0], 'task')
    labels.shift()

    let data  = _.pluck(input[input.length - 1], 'total')
    data.shift()
    return {
        labels,
        data
    }
}

export interface TopHeading {
    task: string,
    score: number
}
export const getTopTaskHeading = (input: ChartData): TopHeading => {
    let task = '', score = 0
        const dataNumber = input.data.map(item => {
            return parseInt(item, 10)
        })
        score = Math.max(...dataNumber)
        const indexMax = _.indexOf(dataNumber, score)
        task = input.labels[indexMax]
        //console.log('max', score)
    return {
        task,
        score
    }
}

interface Authentication {
    authentication: boolean,
    client_name: string
  }

export const signIn = async (username: string, password: string): Promise<Authentication> =>  {
    axios.defaults.baseURL =  process.env.AUTH_SERVER || "https://geografia-user-admin.herokuapp.com";
    try {
        const res = await axios.get("/api/spendmapp_user.json", {
            auth: {
              username: username,
              password: password
            }
        })
        const data = res.data
        //console.log('data', data)  
        return {
            authentication: true,
            client_name: data.name
        }
    } catch(err) {
        //console.log('error', err)
        return {
            authentication: false,
            client_name: username
        }
        
    }

  }