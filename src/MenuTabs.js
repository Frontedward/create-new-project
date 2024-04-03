import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;
import styles from "./GeneralTab.module.css";

const onChange = (key) => {
  console.log(key);
};

const MenuTabs = () => (
  <Tabs defaultActiveKey="1" onChange={onChange} key="3">
    <TabPane tab="General" key="1">
      <div className={styles.loremIpsumDolor}>
        Input your project name, web address that we will use and select your
        region, please.
      </div>
      <div className={styles.rectangleParent}>
        {/*Enter project name*/}
        <div className={styles.rectangleContainer}>
          {/*<label>Project name</label>*/}
          <input
            type="text"
            className={styles.projectName}
            placeholder="Project name"
          />
        </div>
        {/*Enter web address*/}
        <div className={styles.groupDiv}>
          {/*<label htmlFor="styles.enter-web">Web address</label>*/}
          <input
            id="enter-web"
            type="url"
            className={styles.webAddress}
            placeholder="Web address"
          />
        </div>
        {/*Choose region*/}
        <div className={styles.rectangleGroup}>
          <label htmlFor="region-choice">Choose region</label>
          <input
            list="available-regions"
            id="region-choice"
            name="region-choice"
          />
          <datalist id="available-regions">
            <option value="United States"></option>
            <option value="Canada"></option>
            <option value="EU"></option>
            <option value="Japan"></option>
            <option value="United Kingdom"></option>
            <option value="Australia"></option>
          </datalist>
        </div>
      </div>
    </TabPane>
    <TabPane tab="Keywords" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Summary" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default MenuTabs;
