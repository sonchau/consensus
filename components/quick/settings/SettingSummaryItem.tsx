import React, { useState, useEffect } from 'react';

interface Props {
  items: string[];
}

const tableData = {
  'padding': '1.5rem 5rem',
  'borderLeft': '1px solid #e2e8f0',
  'borderBottom': '1px solid #e2e8f0'
}

const SettingSummaryItemRaw: React.FC<Props> = ({ items }) => {
//console.log('items', items)
  return (
    <tr>
        {
          items.map((item, index) => {
            return <td style={tableData}>{item}</td>
          })
        }
    </tr>
  );
};

export default SettingSummaryItemRaw;
