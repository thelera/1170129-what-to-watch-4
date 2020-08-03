import * as React from "react";

interface Props {
  message: string;
}

const Error: React.FunctionComponent<Props> = (props: Props) => {
  const {message} = props;

  return (
    <div className="modal">
      <div className="modal-content" style={{padding: 20 + `px`, color: `red`}}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
