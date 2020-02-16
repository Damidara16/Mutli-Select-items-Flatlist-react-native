this.data = []
fetch("https://connect.squareup.com/v2/catalog/search", {
body: JSON.stringify({include_deleted_objects: false, include_related_objects: false,  query: { exact_query: { attribute_name: 'category_id', attribute_value: 'UILZL7OS42YBZRZYZGKQDOU7'}}}),
headers: {
  Authorization: "Bearer EAAAEHTRrbl0FWvqgytVBqJ0lZV9Q9bavTd1hU75RN0WC380qV8k9r-u27HvnFET",
  "Content-Type": "application/json",
  "Square-Version": "2020-01-22"
},
method: "POST"
}).then(res=>res.json()).then(res=>{
  for (const i of res.objects){
    for (const x of i.item_data.variations){
      this.data.push(x)
    }
  } 
})
