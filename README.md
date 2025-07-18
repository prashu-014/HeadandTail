
# 🎮 Head & Tail Game
A simple web-based game built with React that allows users to simulate the classic coin toss game of Heads (H) and Tails (T) using an interactive UI.

# 🔍 Game Objective
The goal is to select either H or T from a dropdown, submit it, and visualize how the sequence builds over time. Each selection stacks vertically below the corresponding column — creating separate tracks for each unique sequence.

# 📌 Features

- 🧭 Routing-enabled: Includes pages for Home, About, and Game (Head & Tail).

- 🎯 Dropdown Input: Choose between H or T with a default "Select Value".

- 🎲 Dynamic Stacking Logic: 
   - Repeating the same character (H or T) appends it vertically.

   - Switching to the other character adds a new adjacent column.

   - Visual pattern example:

   ```
   H T H T
   H T T
   H
   ```

- 🛑 Validation: Prevents submission if no value is selected.

- ♻️ Dropdown Reset: Automatically resets to "Select Value" after submission.



# Frontend

**Tech Stack**
- Vite + React
- Typescript
- Tailwind css 
- React icons
- React Router DOM


# 🛠️ How to Run Locally

```
git clone https://github.com/prashu-014/HeadandTail.git
cd client
npm install
npm run dev

```

# 📷 Screenshot

<img width="1912" height="885" alt="Image" src="https://github.com/user-attachments/assets/a67b1ac4-744b-4e57-867f-7f50481e4083" />

<img width="1917" height="835" alt="Image" src="https://github.com/user-attachments/assets/9085fce0-74b1-465d-a0e3-bc2be0b19430" />

<img width="1915" height="731" alt="Image" src="https://github.com/user-attachments/assets/ecf47eec-4e55-4f86-a282-010d57cb91a4" />
