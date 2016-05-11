(->> friends-stream
     (r/map parseUser)
     (r/filter friend?)
     (r/reduce (fn [acc friend] (conj acc friend)) []))