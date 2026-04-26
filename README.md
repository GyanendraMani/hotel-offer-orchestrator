# Hotel Offer Orchestrator

## Overview

This service aggregates hotel data from multiple suppliers, deduplicates hotels by name, and returns the cheapest price per hotel.

---

## Tech Stack

* Node.js (TypeScript)
* Express.js
* Temporal
* Redis
* Docker

---

## APIs

### Get Hotels

```bash id="r0nq7c"
GET /api/hotels?city=delhi
```

### Get Hotels with Price Filter

```bash id="l9nq6m"
GET /api/hotels?city=delhi&minPrice=5000&maxPrice=7000
```

### Supplier APIs (Mock)

```bash id="q8y1ux"
GET /supplier/supplierA/hotels?city=delhi
GET /supplier/supplierB/hotels?city=delhi
```

---

> Make sure Docker is running before starting the application.

## How to Run

### 1. Clone repository

```bash id="d4f8ru"
git clone https://github.com/GyanendraMani/hotel-offer-orchestrator.git
```

```bash id="d1sk7p"
cd hotel-offer-orchestrator
```

---

### 2. Run application

```bash id="z3jf2v"
docker-compose up --build
```

---

### 3. Access API

```bash id="s6x2kd"
http://localhost:3000/api/hotels?city=delhi
```

---

## Notes

* Temporal is used for orchestrating parallel supplier calls
* Redis is used for caching results
