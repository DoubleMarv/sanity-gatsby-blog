import * as styles from "./banner.module.css";
import React, { Component } from 'react'

export default class Banner extends Component(props) {
    render() {
        return (
            <div className={styles.mainBanner}>
                <p>This is a banner</p>
            </div>
        )
    }
}