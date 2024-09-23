import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from '@/components/section_header'
import AppButton from '@/components/buttons/app_button'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { filiere } from '@/utils/data/filiere'
import CommunityPreviewTile from '@/components/community_tile'


// A utility button Component that allows me to create multiple instances of a small inline button.
export const InlineButton = ({ text, iiconName }: {
  iiconName: React.ComponentProps<typeof Ionicons>['name'],
  text: string
}) => {
  return (
    <TouchableOpacity style={styles.rightButton}>
      <Ionicons name={iiconName} size={20} color={Colors.primary} />
      <Text style={styles.rightButtonText}>{text}</Text>
    </TouchableOpacity>
  )
}


export default function InboxScreen() {
  return (
    <View style={styles.container}>

      <View style={{ marginBottom: 20 }}>
        <SectionHeader
          sectionTitle='Les plus actives'
          sectionHeaderRight={<></>}
        />
        <FlatList
          horizontal
          decelerationRate={.8}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
          data={filiere.filter(f => f.text.length < 19)}
          renderItem={({ item }) => (
            <InlineButton
              iiconName='globe'
              text={item.text}
            />
          )}
        />
      </View>

      <View style={{ marginBottom: 40 }}>
        <SectionHeader
          sectionTitle='Communautés'
          sectionHeaderRight={<InlineButton iiconName='add' text="Ajouter" />}
        />

        <FlatList
          data={filiere}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <CommunityPreviewTile
              key={item.key}
              title={item.text}
            />
          )}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  rightButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.primaryBg,
    paddingHorizontal: 14,
    borderRadius: 20,
    paddingVertical: 4,
  },
  rightButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary
  }
})