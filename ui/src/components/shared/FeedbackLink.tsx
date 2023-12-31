import { Button } from "antd";

import IconFeedback from "src/assets/icons/message-smile-square.svg?react";
import { FEEDBACK_URL } from "src/utils/constants";

export function FeedbackLink() {
  return (
    <Button
      href={FEEDBACK_URL}
      icon={<IconFeedback />}
      style={{
        background: "white",
        bottom: 16,
        fontWeight: "bold",
        position: "fixed",
        right: 16,
      }}
      target="_blank"
      type="link"
    >
      Feedback
    </Button>
  );
}
