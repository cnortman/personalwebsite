---
title: Blackwater Market Terminal
category: Market Data
tagline: Market data · screening · investor education
summary: A market terminal built in 2021 to help the wave of new retail investors understand company financial health and the overall market.
technologies: [Excel, Python, Quandl API, Yahoo Finance API, Web Scrapers, FINRA, SEC EDGAR]
status: archived
year: 2021
metrics:
  - label: Screener categories
    value: '51'
  - label: Options per category
    value: Up to 16
order: 2
featured: true
locked: true
cover: ../../assets/projects/blackwater-market-terminal/home.png
coverAlt: Blackwater Market Terminal home page showing equities, bonds, currencies and crypto prices, sector health and Federal Reserve yield charts.
---

## Overview

Blackwater Market Terminal is a market terminal designed to educate and inform investors. It pairs broad market data with sentiment analysis on the financial data companies publish, plus a scanner and a fully customizable stock screener.

## The problem

During the middle of the 2020 pandemic, a vast influx of retail investors entered the market. There was no platform that simply, but thoroughly, educated new investors on a company's financial health and on the overall market.


## Approach

The goal was to educate and inform investors by providing sentiment analysis on all the financial data companies provide, and to keep the whole market in view in one place.

## Data

- Quandl API and Yahoo Finance API for market data
- FINRA and SEC EDGAR filings
- Custom web scrapers
- Python and Excel for processing and analysis

## System / architecture

- **Home page** — an overall market view split into large equities, bonds, currencies, and crypto.
- **Sectors** — each sector is populated by the stocks you choose, with performance shown separately.
- **Federal Reserve yields** — shown at the bottom, with the ability to switch time perspectives for different investor views.
- **Scanner** — a list of Blackwater's picks for volatile or interesting stocks.
- **Screener** — an interactive screener with 51 categories and up to 16 options each, to tailor stock selection to exactly what you're looking for.
