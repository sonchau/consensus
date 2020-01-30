import React, { createContext } from "react";

export interface IssueContextValue {
    issue?: string
}

export const IssueContext = createContext<IssueContextValue>({});