module powerbi.extensibility.visual {

    /**
     * Interface for BarCharts viewmodel.
     *
     * @interface
     * @property {BarChartDataPoint[]} dataPoints - Set of data points the visual will render.
     * @property {number} dataMax                 - Maximum data value in the set of data points.
     */
    interface BarChartViewModel {
        dataPoints: BarChartDataPoint[];
        dataMax: number;
    };

    /**
     * Interface for BarChart data points.
     *
     * @interface
     * @property {number} value    - Data value for point.
     * @property {string} category - Coresponding category of data value.
     */
    interface BarChartDataPoint {
        value: number;
        category: string;
    };

    let testData: BarChartDataPoint[] = [
        {
            value: 10,
            category: 'a'
        },
        {
            value: 20,
            category: 'b'
        },
        {
            value: 1,
            category: 'c'
        },
        {
            value: 100,
            category: 'd'
        },
        {
            value: 500,
            category: 'e'
        }];


    export class BarChart implements IVisual {

        private target: HTMLElement;
        private updateCount: number;


        private svg: d3.Selection<SVGElement>;
        private host: IVisualHost;
        private selectionManager: ISelectionManager;
        private barChartContainer: d3.Selection<SVGElement>;
        private barContainer: d3.Selection<SVGElement>;
        private xAxis: d3.Selection<SVGElement>;
        private bars: d3.Selection<SVGAElement>;

        constructor(options: VisualConstructorOptions) {
            this.host = options.host;

            let svg = this.svg = d3.select(options.element)
                .append('svg')
                .classed('barChart', true);

            this.barContainer = svg.append('g')
                .classed('barContainer', true);

            this.xAxis = svg.append('g')
                .classed('xAxis', true);


            // console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
            debugger;
                this.target.innerHTML=`
                    <div class="gd"></div>
                `    

        }


        public update(options: VisualUpdateOptions) {
                let targetElement:Element=this.target.querySelector('.gd');

//            console.log('Visual update', options);
//            this.target.innerHTML = `<p>Update count: <em>${(this.updateCount++)}</em></p>`;
                                
            // let width = options.viewport.width;
            // let height = options.viewport.height;
            // //let margins = { top: 0, bottom: 25, left: 0, right: 0 }

            // let viewModel: BarChartViewModel = {
            //     dataPoints: testData,
            //     dataMax: d3.max(testData.map((dataPoint) => dataPoint.value))
            // };

            // //height -= margins.bottom;


            // let yScale = d3.scale.linear()
            //     .domain([0, viewModel.dataMax])
            //     .range([height, 0]);

            // let xScale = d3.scale.ordinal()
            //     .domain(viewModel.dataPoints.map(d => d.category))
            //     .rangeRoundBands([0, width], 0.1);

            // let xAxis = d3.svg.axis()
            //     .scale(xScale)
            //     .orient('bottom');

            // this.xAxis.attr('transform', 'translate(0, ' + height + ')')
            //     .call(xAxis);

            // let bars = this.barContainer.selectAll('.bar').data(viewModel.dataPoints);
            // bars.enter()
            //     .append('rect')
            //     .classed('bar', true);

            // bars.attr({
            //     width: xScale.rangeBand(),
            //     height: d => height - yScale(<number>d.value),
            //     y: d => yScale(<number>d.value),
            //     x: d => xScale(d.category)
            // });

            // bars.exit()
            //     .remove();


        }

    }
}
