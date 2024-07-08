
import React from 'react'
import {styles} from './styles/RenderStatusServices';
import { stylesGlobal } from '../../../modules/styles/global.style';
import { Text, View } from 'react-native';


export function RenderStatusService({status}) {

    const renderStatus = (status) => {
        switch (status) {
      
          case 'progress':
            return (
              <>
                <View style={[stylesGlobal.itemHorizontal]}>
                  <Text style={styles.item__estatus}>Estatus:</Text>
                  <View style={[styles.estatus, styles.aprobado]} >
                    <Text style={{ color: "#fff" }}>in progress</Text>
                  </View>
                </View>
              </>
            )
          case 'cancel':
            return (
              <View style={[stylesGlobal.itemHorizontal]}>
                <Text style={styles.item__estatus}>Estatus:</Text>
                <View style={[styles.estatus, styles.canceled]} >
                  <Text style={{ color: "#fff" }}>Canceled</Text>
                </View>
              </View>
            )
          case 'success':
            return (
              <View style={[stylesGlobal.itemHorizontal]}>
                <Text style={styles.item__estatus}>Estatus:</Text>
                <View style={[styles.estatus, styles.success]} >
                  <Text style={{ color: "#fff" }}>Success</Text>
                </View>
              </View>
            )
        }
      }
    return (
      <>
        {renderStatus(status)}
      </>
    )
}
