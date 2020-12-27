import { connect } from 'react-redux'
import { Link } from './link'

import { mapStateToProps, mapDispatchToProps } from './selector--filter-control'

const FilterControl = connect(mapStateToProps, mapDispatchToProps)(Link)

export { FilterControl }
