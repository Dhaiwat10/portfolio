import React from "react"
import styles from "./Container.module.css"

export default ({ children }) => (
  <div className={styles.Container}>{children}</div>
)
