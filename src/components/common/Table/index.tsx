import { Button } from "../Button";

export interface ITableComponentProps {
  className?: string,
  rows: {
    key: string,
    value: string,
  }[],
  cols: any,
  editAction?: any,
  deleteAction?: any,
}

export const TableComponent: React.FC<ITableComponentProps> = (props) => {
  const { rows, cols, className, editAction, deleteAction } = props;

  return (
    <table className={className}>
      <thead >
        <tr>
          <th key={'noId'} scope="col" className="">No</th>
          {
            rows.map(row =>
              <th key={row.value} scope="col">{row.value}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          cols && (
            cols.map((col: any, index: number) =>
              <tr
                key={index}
              >
                <td key={index+'no'} >{index+1}</td>
                {
                  rows.map((row, index) => {
                    if(row.key === 'actions') {
                      return (<td key={index+'s'} >
                                <Button onClick={() => editAction(col['id'])}>EDIT</Button> 
                                <Button onClick={() => deleteAction(col['id'])}>DELETE</Button>
                              </td>
                            )
                    } else {
                      return <td key={index} >{col[row.key]}</td>
                    }
                  })
                }      
              </tr>
            )
          )
        }
        {
          !cols.length && (
            <tr>
              <td colSpan={7} className="empty-table">No result</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}