export const AddAuthor = ({ onAdd }) => (
  <fieldset>
    <form onSubmit={onAdd}>
      <label class="column" htmlFor="name">Name </label>
      <input id="name" name="name" />
      <div>
      <label class="column" htmlFor="surname">Surname </label>
      <input id="surname" name="surname" />
      </div>
    <div>
      <button class="submit">Add</button>
    </div>
    </form>
  </fieldset>
);
