import { Button, Modal } from "antd";
import React, { useState } from "react";
import MenuTabs from "./MenuTabs";
import styles from "./GeneralTab.module.css";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        className={styles.createNewProject}
        title="CREATE NEW PROJECT"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        transitionName=""
      >
        <MenuTabs />
      </Modal>
    </div>
  );
};

export default App;
