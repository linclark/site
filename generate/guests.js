import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {flatten, unique} from 'lodash'


import episodes from '../episodes'
import Guests from '../src/pages/guests'
import {sortPeople} from '../shared/utils'

const guests = sortPeople(
  unique(
    flatten(
      episodes.map(e => e.guests)
    ),
    g => (g.twitter || g.name)
  )
)

const string = ReactDOMServer.renderToStaticMarkup(
  <Guests guests={guests} />
)

console.log(string) // eslint-disable-line no-console

