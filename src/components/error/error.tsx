import * as React from "react";
import {ERROR_COLOR} from "../../utils/consts";

interface Props {
  message: string;
}

const Error: React.FunctionComponent<Props> = (props: Props) => {
  const {message} = props;

  return (
    <div className="modal">
      <div className="modal-content" style={{padding: 20 + `px`, color: ERROR_COLOR}}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
