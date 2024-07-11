import Realm from "realm";
import { Task } from "./task.schema";

(async () => {

  const realm = await Realm.open({
    schema: [Task],
    path: "./db/default.realm"
  });


  realm.write(() => {
    realm.deleteAll();
    realm.create(Task, {
      _id: 1,
      name: "go grocery shopping",
      status: "Open",
    });
    realm.create(Task, {
      _id: 2,
      name: "go exercise",
      status: "Open",
    });
  });


  const allTasks = realm.objects(Task);
  const task1 = allTasks.find((task) => task._id == 1);

  let rootElement = document.getElementById('root');
  rootElement.innerHTML += JSON.stringify(task1);

  realm.close();

})();
