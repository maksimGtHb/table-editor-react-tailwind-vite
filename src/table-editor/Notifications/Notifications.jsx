import { useEntries } from '../Context/EntryContextTableDataExample';

const Notifications = () => {
  const { notifications } = useEntries();

  if (!notifications.length) return null;

  const latest = notifications[notifications.length - 1];

  return (
    <div className="fixed top-2 right-2 z-50">
      <div
        key={latest.id}
        className=" text-slate-600 px-4 py-2 shadow-lg animate-fade-in"
      >
        {latest.message}
      </div>
    </div>
  );
};

export default Notifications;