import {Decrement,Increment} from '../actions/actions';

export interface IAppState{
    counter : number;
}

export const Initial_state:IAppState = {
    counter : 0
}

export function rootReducer(state:IAppState,action):IAppState{
    switch(action.type){
        case Increment : return {counter : state.counter+1};
        case Decrement : return {counter : state.counter-1};
    }
}