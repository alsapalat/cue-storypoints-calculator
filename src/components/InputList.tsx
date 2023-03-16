import clsx from 'clsx';
import { TName, useCue } from '../context';
import { IInputItem } from '../types';

interface IProps {
  name: TName,
  label: string
  options: IInputItem[]
}

function InputList(props: IProps) {
  const context = useCue();
  const value = context[props.name];
  return (
    <div className="flex flex-col">
      <div className="font-semibold text-center">{props.label}</div>
      <div className="flex flex-col space-y-1 flex-1">
        {props.options.map((item, i) => (
          <div className={clsx(
            "relative",
            "border p-3 rounded bg-white h-full",
            value === item.score
              ? "ring-2 ring-pink-500 ring-offset-1"
              : (value === undefined ? 'opacity-100' : 'opacity-60')
          )} key={item.score}>
            <button className="absolute inset-0 h-full w-full z-10" type="button" title="Action" onClick={() => {
              context.setValue(props.name, item.score)
            }} />
            <div className="text-xs">
              {item.title}
            </div>
            <div className="text-xs">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputList