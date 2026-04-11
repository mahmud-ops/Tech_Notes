# Computer Archtechture and Operating system

---

![Computer](Images/Golang/Computer_inside.png)

# Foundations of Computing: Memory, CPU, and Early Computers

Suppose this is a RAM or hard disk. Each section is called a **cell**.

**RAM (Random Access Memory)** – Volatile memory; also called primary memory.
_Volatile_ means the memory **loses its contents when the power is turned off**.

**Hard Disk** – Non-volatile memory; also called secondary memory.
_Non-volatile_ means the memory **retains its contents even when the power is turned off**.

**CPU (Central Processing Unit)** – Can perform basic operations such as:
Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), AND (`&`), OR (`|`), NOT (`!`).

> The size of each cell of RAM, Hard disc and Register should be the same..
> **Example:** A computer is 32 bit means each cell is 32 bit (4 byte)

---

**Evolution of computer**

```mermaid
timeline
    title Evolution of Computers (Detailed Timeline)

    2700 BC : Abacus
             : First known manual calculating device

    1673    : Gottfried Wilhelm Leibniz
             : Stepped Reckoner
             : Early mechanical calculator
             : Concept of binary numbers

    1801    : Joseph Marie Jacquard
             : Jacquard Loom
             : Used punched cards (programming concept)

    1837    : Charles Babbage
             : Analytical Engine
             : First design of a general-purpose mechanical computer

    1843    : Ada Lovelace
             : First computer algorithm
             : Considered first programmer

    1936    : Alan Turing
             : Turing Machine concept
             : Foundation of modern computation

    1946    : ENIAC
             : First electronic general-purpose computer
             : Used vacuum tubes

    1947    : Transistor invented
             : Bell Labs
             : Replaced vacuum tubes

    1958    : Integrated Circuit (IC)
             : Jack Kilby & Robert Noyce
             : Multiple transistors on one chip

    1971    : Intel 4004
             : First microprocessor (4-bit)

    1975    : Altair 8800
             : First commercially successful personal computer

    1976    : Apple Inc.
             : Apple I computer

    1981    : IBM PC
             : Standardized personal computing (16-bit)

    1989    : Tim Berners-Lee
             : World Wide Web invented

    2000s   : Modern Computing Era
             : Internet, mobile computing, cloud systems
```

## How did the Analytical Engine work?

**Components of the CPU:**

1. **Processing Unit (PU):** Performs basic operations like addition, subtraction, multiplication, division, and others.
2. **Register Set:** Stores addresses, pointers, and intermediate results during computation.

**Input:** Punched cards
Example: Input binary `1011111` (decimal 95)

**Memory (conceptual “cells”):**

| Cell  | 0   | 1   | 2   | 3   | …   |
| ----- | --- | --- | --- | --- | --- |
| Value |     | 95  |     |     |     |

- The **pointer register** in the CPU holds the address of the data to be processed.
- The **processing unit** fetches the data from memory, performs the operation, and stores intermediate results in registers.

**Output:** Punched cards with holes representing the computed results, later decoded manually.

**Notes:**

- The Analytical Engine had **no hard disk or electronic memory**. All storage was mechanical.

**Data Flow (Mermaid Diagram):**

```mermaid
flowchart LR
    Input[Punched Card Input] --> Memory[Memory Cell Storage]
    Memory --> Pointer[Pointer Register in CPU]
    Pointer --> PU[Processing Unit]
    PU --> Output[Punched Card Output]
```

---

# Operating system intro

