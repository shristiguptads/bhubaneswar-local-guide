# Bhubaneswar Local Street Food Guide

This project is a simple local guide tool that recommends Bhubaneswar street food based on time of day and budget, built using authentic cultural context from `.kiro/product.md`.

## Problem
New students and visitors often struggle to understand local food options and timing in Bhubaneswar.

## Solution
A lightweight web app that uses Kiro with a custom context file (`product.md`) to provide city-specific recommendations following authentic local preferences.

## Features

- **Time-based Recommendations**: Morning, afternoon, and evening suggestions
- **Budget-friendly Options**: Find street food within ₹10-₹100 range
- **Cultural Context**: Learn about local food culture and timing preferences
- **Authentic Local Knowledge**: Based on actual Bhubaneswar street food culture

## Street Foods Included

- **Dahibara Aloodum** (₹30) - Very popular in mornings and evenings
- **Bara Ghuguni** (₹25) - Common breakfast item
- **Chuda Mix** (₹20) - Cheap, quick evening snack
- **Gupchup** (₹25) - Popular near markets and colleges
- **Pakodi** (₹30) - Common during rainy evenings

## Recommendation Logic

The app strictly follows rules from `product.md`:

- **Low Budget**: Suggests Chuda Mix or Bara Ghuguni
- **Morning (7-11 AM)**: Recommends Bara Ghuguni or Dahibara Aloodum
- **Afternoon (12-4 PM)**: Advises light snacks, avoiding oily food due to heat
- **Evening (5-9 PM)**: Suggests Gupchup, Pakodi, Chuda Mix, or Dahibara Aloodum

## Cultural Notes

- Street food stalls peak after 5 PM
- Summers are hot - locals avoid heavy food in afternoons
- Hygiene-conscious people prefer known stalls
- Most street food costs between ₹20–₹50
- Students prefer food under ₹30

## How Kiro Helped
Kiro was guided using a custom context file (`.kiro/product.md`) that contains Bhubaneswar's food culture, pricing, and time-based preferences. This allowed faster development and ensured recommendations are locally accurate and culturally appropriate.

## Tech Stack
- HTML5 with semantic structure
- CSS3 with responsive design and gradients
- Vanilla JavaScript with cultural logic
- Kiro (context-driven development)

## How to Run
Open `index.html` in a browser and start exploring Bhubaneswar's street food culture!