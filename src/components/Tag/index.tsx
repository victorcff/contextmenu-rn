import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

import { HoldItem } from "react-native-hold-menu";

import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  return (
    <Animated.View
      style={styles.container}
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <HoldItem
        items={[
          { text: title, isTitle: true },
          {
            text: "Apagar",
            icon: "trash",
            isDestructive: true,
            onPress: () => onRemove(),
          },
        ]}
      >
        <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </Animated.View>
  );
}
