import React, { useState } from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';

interface Props {
  activeTodo?: Todo;
}

export const TodoModal: React.FC<Props> = ({ activeTodo }) => {
  const handleClose = () => {

  }

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {activeTodo ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #2
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="delete" data-cy="modal-close" onClick={handleClose}/>
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              quis ut nam facilis et officia qui
            </p>

            <p className="block" data-cy="modal-user">
              {/* <strong className="has-text-success">Done</strong> */}
              <strong className="has-text-danger">Planned</strong>

              {' by '}

              <a href="mailto:Sincere@april.biz">Leanne Graham</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
