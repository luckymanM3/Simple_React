import { useEffect, useState } from "react";
import { ButtonComponent } from "../Button";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { TableEditInputComponent } from "../TableEditInput";
import { IEmployee } from "types";
export interface ITableComponentProps {
  className?: string,
  cols: {
    key: string,
    value: string,
  }[],
  rows: any,
  editAction: (id: number) => void,
  sortAction: (sortedField: string, isSortUp: boolean) => void,
  deleteAction: (id: number) => void,
  editCellAction: (editedRow: IEmployee) => void,
}

export const TableComponent: React.FC<ITableComponentProps> = (props) => {
  const { rows, cols, className, sortAction, editAction, deleteAction, editCellAction } = props;
  const [sortedField, setSortedField] = useState<string>('');
  const [isSortUp, setIsSortUp] = useState<boolean>(false);

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

  const onEditCell = (row: number, col: string, e: any) => {
    const val = e.target.value;
    let editedRow = {...rows[row]};
    editedRow[col] = val;
    editCellAction(editedRow);
  }

  return (
    <table className={className}>
      <thead >
        <tr>
          <th key={'noId'} scope="col" className="">No</th>
          {
            cols.map(col => (
                <th key={col.key} scope="col" onClick={() => onSort(col.key)} >
                  {col.key}
                  {
                    col.key !== 'actions' &&
                      (
                        sortedField === col.key ? (
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
          rows && (
            rows.map((row: any, arrayIndex: number) =>
              <tr
                key={arrayIndex}
              >
                <td key={arrayIndex+'no'} >{arrayIndex+1}</td>
                {
                  cols.map((col, index) => {
                    if(col.key === 'actions') {
                      return (<td key={index+'s'} >
                                <ButtonComponent onClick={() => editAction(row['id'])} background="#147d69" >EDIT</ButtonComponent> 
                                <ButtonComponent onClick={() => deleteAction(row['id'])} background="#db5d5d" >DELETE</ButtonComponent>
                              </td>
                            )
                    } else {
                      return <td key={index} id={'cell'+arrayIndex+col.key} >
                          {
                            <TableEditInputComponent 
                              type={(col.key === 'age' || col.key === 'salary') ? 'number' : 'text' }
                              id={'input'+arrayIndex+col.key}
                              value={row[col.key]}
                              onChange={(e) => onEditCell(arrayIndex, col.key, e)}
                            />
                          }
                        </td>
                    }
                  })
                }      
              </tr>
            )
          )
        }
        {
          !rows.length && (
            <tr>
              <td colSpan={7} className="empty-table">No result</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}