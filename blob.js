async function getJacked(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("failed!");
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.error("there was an oops:", error);
  }
}

const spring1 =
  "https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=554798&Session=2025%Spring%1&Cat1=After%School%DnD&&hidecols=Session,Description&sort=StartDate,Ages&&tuitionlabel=Price&classlabel=Program";

const spring2 =
  "https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=554798&Session=2025%Spring%2&Cat1=After%School%DnD&&hidecols=Session,Description&sort=StartDate,Ages&&tuitionlabel=Price&classlabel=Program";

getJacked(spring1);
getJacked(spring2);
