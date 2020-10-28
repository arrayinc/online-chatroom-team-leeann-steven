import React from "react";
import { useSelector } from "react-redux";
import { allChannelList } from "./channelListSlice";
import Button from "react-bootstrap/Button";
import SendChannel from "./channelModal"

export default function Channels() {
  const channel = useSelector(allChannelList);

  return (
    <div className="channels-sidebar">
      <h5>Channels </h5>
      <hr />
      <ul className="list-unstyled">
        <li><Button>#general</Button></li>
        <li><Button>#issues</Button></li>
        <li><Button>#candidates</Button></li>
        {channel}
        <div>
          <SendChannel />
        </div>
      </ul>
    </div>
  );
}