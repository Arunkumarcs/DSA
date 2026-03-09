# Distributed Systems
- [Important Distributed Systems Interview Questions](./Distributed_Systems/Important_Distributed_Systems_interview_questions.md)
- [Top 20 Distributed System Questions (FAANG level)](./Distributed_Systems//Top_20_Distributed_System_Questions_(FAANG%20level).md)


# 10 Distributed System Questions that FAANG asks repeatedly
Here are **10 Distributed System Questions that FAANG (Google, Amazon, Meta, Netflix, Uber) repeatedly ask** in **Senior / Staff / Tech Lead interviews**. These questions test **architecture thinking, trade-offs, and failure handling** — not just theory.

---

# 1. Explain the CAP Theorem with a Real System

Question:

> In a distributed system, why can't we guarantee **Consistency, Availability, and Partition tolerance at the same time?**

Follow-ups:

* What happens during **network partition**?
* Why must distributed systems choose **CP or AP**?

Example systems:

* **CP system** → Apache HBase
* **AP system** → Apache Cassandra

---

# 2. How Do You Design a Distributed Rate Limiter?

Common FAANG question.

Things to discuss:

* Token bucket
* Sliding window
* Distributed counters
* Redis atomic operations

Example technology:

* Redis

Challenges:

* race conditions
* multi-region consistency

---

# 3. How Would You Handle Duplicate Messages in a Distributed System?

Common in event-driven systems.

Solutions:

* Idempotent APIs
* Deduplication store
* Message IDs

Example queue system:

* Apache Kafka
* Amazon Simple Queue Service

---

# 4. How Do You Guarantee Message Ordering?

Very common interview question.

Approaches:

* partitioning
* single writer principle
* ordered logs

Example:

* Apache Kafka ensures ordering **within a partition**.

---

# 5. How Do You Design a Globally Distributed Database?

Topics expected:

* multi-region replication
* clock synchronization
* quorum reads/writes

Example:

* Google Spanner

Key idea:

**TrueTime API** to maintain global consistency.

---

# 6. How Do You Perform Leader Election?

Important for cluster coordination.

Algorithms:

* Raft
* Paxos

Example tools:

* etcd
* Apache ZooKeeper

---

# 7. How Would You Design a Distributed Cache?

Problems to discuss:

* cache invalidation
* cache stampede
* replication
* eviction policy

Technologies:

* Redis
* Memcached

---

# 8. How Do You Handle Network Partitions?

Very important question.

Possible solutions:

* quorum reads/writes
* retries
* circuit breakers
* eventual consistency

Example database:

* Amazon DynamoDB

---

# 9. How Do You Implement Distributed Locking?

Used when **multiple services modify shared resources**.

Approaches:

* Redis locks
* ZooKeeper locks
* database locks

Example implementation:

* Redis **SETNX lock**

Technology:

* Redis

---

# 10. How Do You Debug Failures in Distributed Systems?

FAANG loves this question.

Techniques:

1. Distributed tracing
2. Structured logging
3. Metrics
4. Correlation IDs

Observability tools:

* Jaeger
* Prometheus
* Grafana

---

# Bonus Question FAANG Often Adds

> **Why is exactly-once delivery nearly impossible in distributed systems?**

Most systems provide:

* **at-least-once delivery**
* **at-most-once delivery**

Example:

* Apache Kafka

---

# Quick Interview Tip (Very Important)

FAANG interviewers expect answers in this structure:

1️⃣ **Define the problem**
2️⃣ **Explain failure scenarios**
3️⃣ **Discuss trade-offs**
4️⃣ **Give real system examples**

Example answer format:

```
Problem → Failure → Solution → Tradeoff → Real system
```

---

✅ If you want, I can also show:

* **15 Distributed System Design Questions FAANG asks**
* **Distributed System Failure Scenarios (with Mermaid diagrams)**
* **Distributed System Cheat Sheet (1-page for interviews)**
* **How Google, Amazon, Netflix actually design distributed systems**

These are extremely useful for **Staff / Architect interviews**.


# Distributed System Failure Scenarios (with Mermaid diagrams)
# System Design Interview Answers for these questions
# Visual cheat sheet for distributed systems (very useful for interviews)
# Distributed System Failure Interview Questions
# Distributed System Mermaid Diagrams (for interview explanation)
# Distributed System Cheat Sheet for Architects

Just tell me.
