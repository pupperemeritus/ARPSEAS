"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Group = ({params: {groupname}}) => {
  const router = useRouter();
  const groupName = groupname;

  // Fetch items for the current group
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]

  
  return (
    <div>
      <h2>Items in Group: {groupName}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`${groupName}/${item.name}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Group;
