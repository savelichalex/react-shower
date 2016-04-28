(def UP   38) (def DOWN  40)
(def LEFT 37) (def RIGHT 39)

(def source
  (let [out (r/events)]
    (.addEventListener js/document "keydown"
      #(r/deliver out (.-keyCode %)))
    out))

(-> source (r/filter #(= UP %)) (r/map jump))
(-> source (r/filter #(= DOWN %)) (r/map crouch))
(-> source (r/filter #(= LEFT %)) (r/map go-left))
(-> source (r/filter #(= RIGHT %)) (r/map go-right))