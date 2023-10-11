import { Button } from "../Button";

export interface ITableComponentProps {
  className?: string,
  rows: {
    key: string,
    value: string,
  }[],
  cols: any,
}

export const TableComponent: React.FC<ITableComponentProps> = (props) => {
  const { rows, cols, className } = props;

  return (
    <table className={`min-w-full text-left text-sm font-light ${className}`}>
      <thead className="border-b font-medium">
        <tr>
          <th key={'noId'} scope="col" className="px-6 py-4">No</th>
          {
            rows.map(row =>
              <th key={row.value} scope="col" className="px-6 py-4">{row.value}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          cols && cols.map((col: any, index: number) =>
            <tr
              key={index}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
              <td key={index+'no'} className="whitespace-nowrap px-6 py-4">{index+1}</td>
              {
                rows.map((row, index) => {
                  if(row.key === 'actions') {
                    return <td key={index+'s'} className="whitespace-nowrap px-6 py-4"> <Button>EDIT</Button> <Button>DELETE</Button></td>
                  } else {
                    return <td key={index} className="whitespace-nowrap px-6 py-4">{col[row.key]}</td>                    
                  }
                })
              }
            </tr>
          )
        }
      </tbody>
    </table>
  )
}