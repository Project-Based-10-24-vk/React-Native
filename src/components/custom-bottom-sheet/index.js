import { forwardRef, useCallback } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'

import { styles } from './CustomBottomSheet.styles'

const CustomBottomSheet = ({ snapPoints, content }, ref) => {
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )

  return (
    <Portal>
      <BottomSheet
        backdropComponent={renderBackdrop}
        enablePanDownToClose='true'
        handleIndicatorStyle={styles.indicator}
        index={-1}
        ref={ref}
        snapPoints={snapPoints}
      >
        {content}
      </BottomSheet>
    </Portal>
  )
}

export default forwardRef(CustomBottomSheet)
