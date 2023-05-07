import express from 'express'

export interface IRoute {
    init: () => express.Router
}