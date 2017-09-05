// @flow
import React from 'react';
import type { Field } from '../form';

type FieldTextAreaProps = {
  field: Field<*>,
  title: string,
  onChangeInput: Function,
  inputProps?: {
    className?: string,
    style?: {},
    rows?: number
  },
  labelWidth?: number,
  controlWidth?: number
};

export default function FieldTextArea({
  field,
  title,
  onChangeInput,
  inputProps,
  labelWidth = 2,
  controlWidth = 3
}: FieldTextAreaProps) {
  return (
    <div>
      {title !== '' &&
        <label className={`control-label col-md-${labelWidth}`} htmlFor={field.name}>
          {title}
        </label>}
      <div className={`col-md-${controlWidth}`}>
        <textarea
          {...inputProps}
          className={`form-control ${inputProps ? inputProps.className || '' : ''}`}
          id={field.name}
          value={field.rawValue || ''}
          onChange={e => onChangeInput({ name: field.name, rawValue: e.target.value })}
        />
      </div>
    </div>
  );
}