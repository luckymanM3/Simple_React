import { useEffect, useState } from "react";
import { Button } from "../Button";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
export interface ITableComponentProps {
  className?: string,
  rows: {
    key: string,
    value: string,
  }[],
  cols: any,
  editAction?: any,
  sortAction?: any,
  deleteAction?: any,
}

export const TableComponent: React.FC<ITableComponentProps> = (props) => {
  const { rows, cols, className, sortAction, editAction, deleteAction } = props;
  const [sortedField, setSortedField] = useState<string>('');
  const [isSortUp, setIsSortUp] = useState<boolean>();

  const onSort = (field: string) => {
    if(field === 'actions') return;
    if(sortedField === field) {
      setIsSortUp(prev => !prev);
    } else {
      setSortedField(() => field);
      setIsSortUp(() => true);
    }
  }

  useEffect(() => {
    sortAction(sortedField, isSortUp);
  }, [isSortUp, sortedField]);

  return (
    <table className={className}>
      <thead >
        <tr>
          <th key={'noId'} scope="col" className="">No</th>
          {
            rows.map(row => (
                <th key={row.key} scope="col" onClick={() => onSort(row.key)} >
                  {row.key}
                  {
                    row.key !== 'actions' &&
                      (
                        sortedField === row.key ? (
                          isSortUp ? <FaSortUp /> : <FaSortDown />
                        ) : <FaSort className="fa-sort-icon" />
                      )
                  }
                </th>
              )
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