const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  return (
    <div style={styles.container}>
      <img alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>
        Добро пожаловать,
        {/* {name} */}
      </span>
      <button type="button" onClick={() => true}>
        Выйти
      </button>
    </div>
  );
}
