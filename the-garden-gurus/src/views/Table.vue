<script>
export default {
    name: "Table",
    data () {
        return {
            table: {
                thead: [
                    { title: 'Column 1', row: 1, col: 1 },
                    { title: 'Column 2', row: 1, col: 1 },
                    { title: 'Column 3', row: 1, col: 1 },
                    { title: 'Column 4', row: 1, col: 1 },
                    { title: 'Column 5', row: 1, col: 1 },
                ],
                tbody: [
                    [
                        { title: 'Row 1, Cell 1', row: 1, col: 1},
                        { title: 'Row 1, Cell 2', row: 1, col: 1},
                        { title: 'Merged Cells', row: 5, col: 1},
                        { title: 'Row 1, Cell 4', row: 1, col: 1},
                        { title: 'Row 1, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Row 2, Cell 1', row: 1, col: 1},
                        { title: 'Row 2, Cell 2', row: 1, col: 1},
                        { title: 'Row 2, Cell 4', row: 1, col: 1},
                        { title: 'Row 2, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Row 3, Cell 1', row: 1, col: 1},
                        { title: 'Merged Cells', row: 3, col: 1},
                        { title: 'Row 3, Cell 4', row: 1, col: 1},
                        { title: 'Row 3, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Merged Cells', row: 2, col: 1},
                        { title: 'Row 4, Cell 4', row: 1, col: 1},
                        { title: 'Row 4, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Row 5, Cell 4', row: 1, col: 1},
                        { title: 'Row 5, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Row 6, Cell 1', row: 1, col: 1},
                        { title: 'Row 6, Cell 2', row: 1, col: 1},
                        { title: 'Row 6, Cell 3', row: 1, col: 1},
                        { title: 'Row 6, Cell 4', row: 1, col: 1},
                        { title: 'Row 6, Cell 5', row: 1, col: 1},
                    ],
                    [
                        { title: 'Row 7, Cell 1', row: 1, col: 1},
                        { title: 'Merged Cells', row: 1, col: 2},
                        { title: 'Row 7, Cell 4', row: 1, col: 1},
                        { title: 'Row 7, Cell 5', row: 1, col: 1},
                    ],
                ]
            }
        }
    }
}
</script>

<template>
    <section class="table">
        <div class="container table-container">
            <div class="table-content">
                <table>
                    <thead>
                        <tr>
                            <th 
                                v-for="(item, i) in table.thead" 
                                :key="i" 
                                :rowspan="item.row"
                                :colspan="item.col"
                            >
                                {{ item.title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr
                            v-for="(Tr, TrID) in table.tbody"
                            :key="TrID"
                        >
                            <td
                                v-for="(Td, TdID) in Tr"
                                :key="TdID"
                                :rowspan="Td.row"
                                :colspan="Td.col"
                            >
                                {{ Td.title }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<style>

</style>