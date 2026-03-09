Here are **Top 20 FAANG-level Distributed Systems Interview Questions**. These are commonly asked for **Senior / Staff / Tech Lead roles** (Google, Amazon, Meta, Netflix, Uber). Since you're a **Lead Engineer working with microservices and AWS**, these are very relevant for **system design and architecture interviews**.

---

# Top 20 Distributed Systems Questions (FAANG Level)

## 1. What is CAP Theorem?

Explain why a distributed system cannot guarantee **Consistency, Availability, and Partition tolerance simultaneously**.

Follow-up:

* Why is **Partition tolerance mandatory** in distributed systems?

---

## 2. Difference Between Strong Consistency and Eventual Consistency

Explain trade-offs.

Example systems:

* **Strong consistency** → Google Spanner
* **Eventual consistency** → Amazon DynamoDB

---

## 3. How Do You Handle Network Partition?

What happens when nodes cannot communicate?

Possible solutions:

* quorum reads/writes
* leader election
* consensus algorithms

---

## 4. What is Distributed Consensus?

Explain how multiple nodes agree on a value.

Important algorithms:

* **Paxos**
* **Raft**

Systems using consensus:

* Apache Kafka
* etcd
* Apache ZooKeeper

---

## 5. What is the Split-Brain Problem?

Occurs when **two nodes believe they are leaders** due to network partition.

Example systems affected:

* distributed databases
* cluster managers

---

## 6. What is Consistent Hashing?

Used for **load distribution across nodes**.

Used in:

* Apache Cassandra
* Redis

Benefits:

* minimal data movement when nodes change

---

## 7. How Do You Design a Distributed Cache?

Key problems:

* cache invalidation
* cache consistency
* eviction strategies

Example:

* Memcached
* Redis

---

## 8. What is the Difference Between Horizontal and Vertical Scaling?

Horizontal scaling → add nodes
Vertical scaling → add resources

Example:

* scaling microservices on Amazon Elastic Container Service.

---

## 9. What is a Distributed Transaction?

A transaction spanning **multiple services or databases**.

Problems:

* latency
* failure handling
* rollback complexity

---

## 10. What is Two-Phase Commit (2PC)?

Steps:

1. Prepare phase
2. Commit phase

Problem:

⚠️ coordinator failure causes **blocking**.

---

## 11. Why Are Distributed Transactions Avoided in Microservices?

Alternatives:

* **Saga pattern**
* **Event-driven architecture**
* **Compensating transactions**

---

## 12. What is the Saga Pattern?

Used for **long-running distributed transactions**.

Two approaches:

* **Choreography**
* **Orchestration**

Example workflow:

```
Order Service → Payment Service → Inventory Service
```

---

## 13. What is Idempotency?

Ensures **repeated requests produce the same result**.

Example:

```
POST /payment
Idempotency-Key: abc123
```

Used in:

* payment systems
* message processing

---

## 14. What is Exactly-Once Delivery?

Message delivered **only once**.

Reality:

Most systems provide:

* **at-least-once**
* **at-most-once**

Example messaging system:

* Apache Kafka

---

## 15. What is Distributed Locking?

Ensures **only one node modifies shared resource**.

Solutions:

* Redis locks
* ZooKeeper locks

---

## 16. What is Leader Election?

Selecting a node as **cluster leader**.

Example systems:

* Apache ZooKeeper
* etcd

---

## 17. What is Backpressure?

When consumers cannot keep up with producers.

Example:

Kafka consumer slower than producer.

Solutions:

* rate limiting
* batching
* queue buffering

---

## 18. How Do You Handle Duplicate Messages?

Techniques:

* idempotent consumers
* deduplication tables
* message IDs

Used in:

* Amazon Simple Queue Service

---

## 19. What is the Gossip Protocol?

Nodes share state information **peer-to-peer randomly**.

Used in:

* Apache Cassandra

Benefits:

* scalable cluster membership

---

## 20. How Do You Debug a Distributed System Failure?

Techniques:

* distributed tracing
* centralized logging
* metrics

Tools:

* Jaeger
* Prometheus
* Grafana

---


# Bonus FAANG Follow-Up Questions

These often appear after the main question:

1. Why is **clock synchronization hard in distributed systems?**
2. What is **Lamport timestamp**?
3. What is **vector clock**?
4. What is **CRDT**?
5. Why does **Google Spanner use TrueTime?**

---

✅ If you'd like, I can also show: