#!/usr/bin/env node
import {publish} from 'gh-pages'

publish(
    'build',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/M0ugou-club/Zappy-doc.git',
        user: {
            name: 'Kapsulon',
            email: 'theo.bary@epitech.eu'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)